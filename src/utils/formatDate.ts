const formatDate = (date: string): string => {
    // minha forma
    // Converter a string de data para objeto Date
    const originalDate = new Date(date);
    // Acrescentar um dia
    originalDate.setDate(originalDate.getDate() + 1);
    // Formatar a data no formato 'dd/mm/yyyy'
    const formattedDate = originalDate.toLocaleDateString('pt-BR');
    return formattedDate;
    // exemplo do professor com a data correta
    //const dateFormated = new Date(date);
    //const year = dateFormated.getFullYear();
    //const day = dateFormated.getDate() + 1 > 9 ? dateFormated.getDate() : `0${dateFormated.getDate()}`;
    //const month = dateFormated.getMonth() + 1 > 9 ? dateFormated.getMonth() + 1 : `0${dateFormated.getMonth() + 1}`;
    //return `${day}/${month}/${year}`;
    //gerado por IA, mas a data fica -1
    //return new Date(date).toLocaleDateString('pt-BR');
};
export default formatDate;
