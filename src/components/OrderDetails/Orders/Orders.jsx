import React from 'react';
import TextField from '@material-ui/core/TextField';

class Orders extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <form noValidate autoComplete="off" className="tarif-zone-and-status">
                        <TextField id="outlined-basic"
                            label="Тарифная зона "
                            variant="outlined"
                            value='Yerevan'
                            className='text-field-material'
                            InputProps={{
                                readOnly: true,
                            }} />
                        <TextField
                            id="outlined-basic"
                            label="Статус заказа"
                            variant="outlined" 
                            value='На заказе, Отменено клиентом, Отменено водителем, Отменено из админки,  Пропущен, Завершён, Завершён из админки'
                            className='text-field-material'
                            InputProps={{
                                readOnly: true,
                            }} />
                        <TextField
                            id="outlined-basic"
                            label="ID Заказа"
                            variant="outlined" value='TRAZ54564510'
                            className='text-field-material'
                            InputProps={{
                                readOnly: true,
                            }} />
                    </form>
                </div>
                <div className="category-section category-section-first-parth">
                    <div>
                        <form noValidate autoComplete="off" className="categroy-tarif">
                            <TextField id="outlined-basic"
                                label="Адрес начало"
                                variant="outlined"
                                value='Armenya, yerevan, proshyan 46'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="Адрес конец"
                                variant="outlined" 
                                value='Armenya, yerevan, proshyan 4'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </form>
                    </div>
                    <div>
                        <form noValidate autoComplete="off" className="categroy-tarif">
                            <TextField id="outlined-basic"
                                label="Координаты"
                                variant="outlined"
                                value='2121212121; 545454544'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="Координаты"
                                variant="outlined" value='2121212121; 545454544'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </form>
                    </div>
                </div>
                <div className="category-section">
                    <div>
                        <form noValidate autoComplete="off" className="categroy-tarif">
                            <TextField id="outlined-basic"
                                label="Oценили клиента"
                                variant="outlined"
                                value='2'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="Oценили водителя"
                                variant="outlined" value='1'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField id="outlined-basic"
                                label="Категория"
                                variant="outlined"
                                value='Такси'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="Тариф"
                                variant="outlined" value='Комфорт'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </form>
                    </div>
                    <div>
                        <form noValidate autoComplete="off" className="categroy-tarif">
                            <TextField id="outlined-basic"
                                label="Создан"
                                variant="outlined"
                                value='Дата / Время'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="Принят"
                                variant="outlined" value='Дата / Время'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="На месте"
                                variant="outlined" value='Дата / Время'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="В пути"
                                variant="outlined" value='Дата / Время'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="Завершён"
                                variant="outlined" value='Дата / Время'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="Oтменён"
                                variant="outlined" value='Дата / Время'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </form>
                    </div>

                </div>
                <div className="category-section category-second-part">
                    <div>
                        <form noValidate autoComplete="off" className="categroy-tarif">
                            <TextField id="outlined-basic"
                                label="Метод оплаты"
                                variant="outlined"
                                value='Безнал'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="Безнал"
                                variant="outlined" value='500'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="Наличные"
                                variant="outlined" value='300'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </form>
                    </div>
                    <div>
                        <form noValidate autoComplete="off" className="categroy-tarif">
                            <TextField id="outlined-basic"
                                label="Длительность заказа"
                                variant="outlined"
                                value='01:26:45 AM'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="Дистанция"
                                variant="outlined" value='8KM'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                            <TextField
                                id="outlined-basic"
                                label="Платное ожидание"
                                variant="outlined" value='12:15:12 PM'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </form>
                    </div>
                </div>
                <div className="category-second-part category-third-parth">
                    <form noValidate autoComplete="off" className="categroy-tarif">
                        <TextField id="outlined-basic"
                            label="Стоимость"
                            variant="outlined"
                            value='1000 AMD'
                            className='text-field-material'
                            InputProps={{
                                readOnly: true,
                            }} />
                    </form>
                </div>
                <div className="category-section category-second-part">
                    <div>
                        <form noValidate autoComplete="off" className="categroy-tarif">
                            <TextField id="outlined-basic"
                                label="Комиссия заказа"
                                variant="outlined"
                                value='130(13%)'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </form>
                    </div>
                    <div>
                        <form noValidate autoComplete="off" className="categroy-tarif">
                            <TextField id="outlined-basic"
                                label="ID транзакции"
                                variant="outlined"
                                value='TRAZ54564511'
                                className='text-field-material'
                                InputProps={{
                                    readOnly: true,
                                }} />
                        </form>
                    </div>
                </div>
            </div>);
    }
}
export default Orders;