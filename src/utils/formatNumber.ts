import numeral from 'numeral';
import "numeral/locales/pt-br";

// switch between locales
numeral.locale('pt-br');

export const formatNumber = (number: number) => numeral(number).format('$ , 0.00');