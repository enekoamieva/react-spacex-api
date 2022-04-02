import dayjs from 'dayjs';
import 'dayjs/locale/es';

const formateDate = (date) => {
    const formate = dayjs(date).locale('es').format('D MMMM, YYYY');
    return formate;
}

export default formateDate;