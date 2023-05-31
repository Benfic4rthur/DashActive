const formatCurrency = (current: number): string => {
    return current.toLocaleString('pt-BR', 
    {
        style: 'currency',
        currency: 'BRL',
    });
};
export default formatCurrency;
