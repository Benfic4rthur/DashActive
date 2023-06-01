// react
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { v4 as uuidv4 } from 'uuid';
//components
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
//repositories
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listaMeses from '../../repositories/meses';
//styles
import { Container, Content, Filters } from './styles';
import favicon from '../../assets/logo.svg';
//utils
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import { pegaAnos } from '../../utils/date';
import { pegaMeses } from '../../utils/date';

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
const List: React.FC = () => {
  const [data, setData] = useState<Idata[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
  const movimentType = useParams<IRouteParams>().type;
  const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

  // manipulando os dados do repositório
  const pageData = useMemo(() => {
    return movimentType === 'entradas'
      ? {
          pageTitle: 'Carteira - Entradas',
          title: 'Entradas',
          linecolor: '#4E41F0',
          listData: gains,
        }
      : {
          pageTitle: 'Carteira - Saídas',
          title: 'Saídas',
          linecolor: '#E44C4E',
          listData: expenses,
        };
  }, [movimentType]);

  // função handleFrequencyClick
  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(item => item === frequency); // verifica se a frequencia já está selecionada
    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter(item => item !== frequency); // filtra a lista de frequencias
      setSelectedFrequency(filtered);
    } else {
      setSelectedFrequency(prev => [...prev, frequency]);
    }
  };

  useEffect(() => {
    const filteredDate = pageData.listData.filter(item => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());
      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFrequency.includes(item.frequency)
      );
    });
    const formatedDate = filteredDate.map(item => {
      return {
        id: uuidv4(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      };
    });
    setData(formatedDate);
  }, [pageData, monthSelected, yearSelected, selectedFrequency]);

  // opções de data
  const meses = pegaMeses(listaMeses);

  const anos = pegaAnos(pageData.listData);

  //função handleFrequencyClick gerada pela IA
  // const handleFrequencyClick = (frequency: string) => {
  //   const filteredDate = listData.filter(item => {
  //     const date = new Date(item.date);
  //     const month = String(date.getMonth() + 1);
  //     const year = String(date.getFullYear());
  //     return month === monthSelected && year === yearSelected && item.frequency === frequency;
  //   });
  //   const formatedDate = filteredDate.map(item => {
  //     return {
  //       id: uuidv4(),
  //       description: item.description,
  //       amountFormatted: formatCurrency(Number(item.amount)),
  //       frequency: item.frequency,
  //       dateFormatted: formatDate(item.date),
  //       tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
  //     };
  //   });
  //   setData(formatedDate);
  // };

  return (
    <div>
      <Helmet>
        <link rel='icon' type='image/x-icon' href={favicon} />
        <title>{pageData.pageTitle}</title>
      </Helmet>
      <Container>
        <ContentHeader title={pageData.title} linecolor={pageData.linecolor}>
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
        <Filters>
          <button
            type='button'
            className={`tag-filter tag-filter-recurrent
          ${selectedFrequency.includes('recorrente') && 'tag-actived'}
          `}
            onClick={() => handleFrequencyClick('recorrente')}
          >
            Recorrentes
          </button>
          <button
            type='button'
            className={`tag-filter tag-filter-eventual
          ${selectedFrequency.includes('eventual') && 'tag-actived'}
          `}
            onClick={() => handleFrequencyClick('eventual')}
          >
            Eventuais
          </button>
        </Filters>
        <Content>
          {data.map(item => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          ))}
        </Content>
      </Container>
    </div>
  );
};
export default List;
