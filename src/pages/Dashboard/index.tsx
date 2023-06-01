import React, { useEffect, useMemo, useState } from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import listaMeses from '../../repositories/meses';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import { useParams, Params } from 'react-router-dom';
import { pegaAnos } from '../../utils/date';
import { pegaMeses } from '../../utils/date';
import WalletBox from '../../components/WalletBox';
import { Content } from './styles';
import Messagebox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import PieChartYear from '../../components/PieChartYear';
import { Helmet } from 'react-helmet';
import favicon from '../../assets/logo.svg';
import HistoryBox from '../../components/HistoryBox';
import listOfMonths from '../../repositories/months';
import BarChartBox from '../../components/BarChartBox';
interface IRouteParams extends Params {
  type: string;
}
interface Idata {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}
const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
  const { type } = useParams<IRouteParams>();
  const listData = useMemo(() => {
    return type === 'entradas' ? gains : expenses;
  }, [type]);
  // opções de data
  const meses = pegaMeses(listaMeses);

  const anos = pegaAnos(listData);
  // processamento dos gastos
  const totalExpenses = useMemo(() => {
    // função memo para processamento
    let total: number = 0; // valor inicial
    expenses.forEach(expense => {
      // iteração dos gastos
      const date = new Date(expense.date); // pega a data do gasto
      const year = date.getFullYear(); // pega o ano do gasto
      const month = date.getMonth() + 1; // pega o mês do gasto
      if (month === Number(monthSelected) && year === Number(yearSelected)) {
        // se o mês do gasto for igual ao mês selecionado e o ano do gasto for igual ao ano selecionado
        total += Number(expense.amount); // soma o valor do gasto
      }
    });
    return total;
  }, [monthSelected, yearSelected]);
  // processamento dos gastos por ano
  const totalExpensesYear = useMemo(() => {
    let total = 0;
    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      if (year === Number(yearSelected)) {
        total += Number(expense.amount);
      }
    });
    return total;
  }, [yearSelected]);
  // processamento dos ganhos
  const totalGains = useMemo(() => {
    let total: number = 0;
    gains.forEach(gain => {
      const date = new Date(gain.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      if (month === Number(monthSelected) && year === Number(yearSelected)) {
        total += Number(gain.amount);
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

    // processamento dos ganhos por ano
    const totalGainsYear = useMemo(() => {
      let total: number = 0;
      gains.forEach((gain) => {
        const date = new Date(gain.date);
        const year = date.getFullYear();
        if (year === Number(yearSelected)) {
          total += Number(gain.amount);
        }
      });
      return total;
    }, [yearSelected]);
  // processamento do saldo
  const saldo = totalGains - totalExpenses;

  const message = useMemo(() => {
    if (saldo < 0) {
      return {
        title: 'Que pena!',
        description: 'Sua carteira foi negativa este mês!',
        footertext: 'Considere reavaliar seus gastos!',
        icon: 'sad',
      };
    } else if (totalGains === 0 && totalExpenses === 0) {
      return {
        title: 'Opss!!',
        description: 'Neste mês, não há registros de entradas e saídas!',
        footertext: 'Parece que você não fez nenhum registro nesta data!',
        icon: 'opps',
      };
    } else if (saldo === 0) {
      return {
        title: 'Quase!',
        description: 'Neste mês seus gastos foram iguais aos seus ganhos!',
        footertext: 'Tenha cuidado, reavalie seus gastos no próximo mês!',
        icon: 'grinning',
      };
    }
    return {
      title: 'Muito bem!!',
      description: 'Sua carteira está positiva!',
      footertext: 'Continue assim. Considere investir seu saldo!',
      icon: 'happy',
    };
  }, [saldo]);

  const relationExpensesXGains = useMemo(() => {
    // relação de gastos x ganhos
    const total = totalExpenses + totalGains; // soma dos gastos e ganhos
    const percentGains = Number(((totalGains / total) * 100).toFixed(1)); // calcula o percentual de ganhos
    const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1)); // calcula o percentual de gastos

    const data = [
      {
        name: 'Entradas',
        value: totalGains,
        percent: percentGains ? percentGains : 0,
        color: '#f7931b',
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: percentExpenses ? percentExpenses : 0,
        color: '#e44c4e',
      },
    ];
    return data;
  }, [totalExpenses, totalGains]);

  const relationExpensesXGainsYear = useMemo(() => {
    // relação de gastos x ganhos
    const total = totalExpensesYear + totalGainsYear; // soma dos gastos e ganhos
    const percentGainsYear = (totalGainsYear / total) * 100; // calcula o percentual de ganhos
    const percentExpensesYear = (totalExpensesYear / total) * 100; // calcula o percentual de gastos
    const percent = percentGainsYear - percentExpensesYear; // calcula o percentual de ganhos - gastos
    const data = [
      {
        name: "Entradas",
        value: totalGainsYear,
        percent: Number(percentGainsYear.toFixed(1)),
        color: "#f7931b",
      },
      {
        name: "Saídas",
        value: totalExpensesYear,
        percent: Number(percentExpensesYear.toFixed(1)),
        color: "#e44c4e",
      },
    ];
    return data;
  }, [totalExpenses, totalGains]);

  const dataHistory = useMemo(() => {
    return listOfMonths
      .map((_, month) => {
        let amountEntry = 0;
        gains.forEach(gain => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = String(date.getFullYear());
          if (gainMonth === month && gainYear === yearSelected) {
            amountEntry += Number(gain.amount);
          }
        });

        let amountOutPut = 0;
        expenses.forEach(expense => {
          const date = new Date(expense.date);
          const expenseMonth = date.getMonth();
          const expenseYear = String(date.getFullYear());
          if (expenseMonth === month && expenseYear === yearSelected) {
            amountOutPut += Number(expense.amount);
          }
        });

        return {
          monthNumber: month,
          month: listOfMonths[month].substring(0, 3),
          amountOutPut,
          amountEntry,
        };
      })
      .filter(item => {
        const currentyear = String(new Date().getFullYear());
        const currentmonth = new Date().getMonth();
        return (
          (yearSelected === currentyear && item.monthNumber <= currentmonth) ||
          yearSelected < currentyear
        );
      });
  }, [yearSelected]);

  const relacaodesdpesasrecorrentesvseventuais = useMemo(() => {
    let quantiaRecorrente = 0;
    let quantiaEventual = 0;
    expenses
      .filter(expense => {
        const date = new Date(expense.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return month === Number(monthSelected) && year === Number(yearSelected);
      })
      .forEach(expense => {
        if (expense.frequency === 'recorrente') {
          return (quantiaRecorrente += Number(expense.amount));
        } else {
          return (quantiaEventual += Number(expense.amount));
        }
      });
    const totalSaidas = quantiaEventual + quantiaRecorrente;
    return [
      {
        name: 'Recorrentes',
        amount: quantiaRecorrente,
        percent: Number(((quantiaRecorrente / totalSaidas) * 100).toFixed(1)),
        color: ' #f7931b',
      },
      {
        name: 'Eventuais',
        amount: quantiaEventual,
        percent: Number(((quantiaEventual / totalSaidas) * 100).toFixed(1)),
        color: '#e44c4e',
      },
    ];
  }, [monthSelected, yearSelected]);

  const relacaoganhosasrecorrentesvseventuais = useMemo(() => {
    let quantiaRecorrente = 0;
    let quantiaEventual = 0;
    gains
      .filter(gain => {
        const date = new Date(gain.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return month === Number(monthSelected) && year === Number(yearSelected);
      })
      .forEach(gain => {
        if (gain.frequency === 'recorrente') {
          return (quantiaRecorrente += Number(gain.amount));
        } else {
          return (quantiaEventual += Number(gain.amount));
        }
      });
    const totalEntradas = quantiaEventual + quantiaRecorrente;
    const percentRecurrent = Number(((quantiaRecorrente / totalEntradas) * 100).toFixed(1));
    const percentEventual = Number(((quantiaEventual / totalEntradas) * 100).toFixed(1));
    return [
      {
        name: 'Recorrentes',
        amount: quantiaRecorrente,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: ' #f7931b',
      },
      {
        name: 'Eventuais',
        amount: quantiaEventual,
        percent: percentEventual ? percentEventual : 0,
        color: '#e44c4e',
      },
    ];
  }, [monthSelected, yearSelected]);

  return (
    <div>
      <Helmet>
        <link rel='icon' type='image/x-icon' href={favicon} />
        <title>Carteira - Gráficos</title>
      </Helmet>
      <Container>
        <ContentHeader title='Dashboard' linecolor='#f7931b'>
          <SelectInput
            options={listaMeses}
            onChange={e => setMonthSelected(e.target.value)}
            defaultValue={monthSelected}
          />
          <SelectInput
            options={anos}
            onChange={e => setYearSelected(e.target.value)}
            defaultValue={yearSelected}
          />
        </ContentHeader>
        <Content>
          <WalletBox
            titlelabel='Saldo'
            amount={saldo}
            footerlabel='atualizado com base nos lançamentos do mês'
            icon='dolar'
            color='#4e41f0'
          />
          <WalletBox
            titlelabel='Entradas'
            amount={totalGains}
            footerlabel='atualizado com base nas entradas'
            icon='arrowDown'
            color='#F7931B'
          />
          <WalletBox
            titlelabel='Saídas'
            amount={totalExpenses}
            footerlabel='atualizado com base nas saídas'
            icon='arrowUp'
            color='#E44C4E'
          />
          <Messagebox
            title={message.title}
            description={message.description}
            footertext={message.footertext}
            icon={message.icon}
          />
          <PieChartBox data={relationExpensesXGains} />
          <PieChartYear data={relationExpensesXGainsYear} />
          <HistoryBox
            data={dataHistory}
            lineColoramountEntry='#f7931b'
            lineColoramountOutPut='#e44c4e'
          />
          <BarChartBox data={relacaodesdpesasrecorrentesvseventuais} title='Saídas' />
          <BarChartBox data={relacaoganhosasrecorrentesvseventuais} title='Entradas' />
        </Content>
      </Container>
    </div>
  );
};
export default Dashboard;
