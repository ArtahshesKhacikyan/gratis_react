import React from 'react';
import TextField from '@material-ui/core/TextField';
import PaymentTable from './PaymentTable';

class Payment extends React.Component {
    render() {
        return (
            <div>
                <form noValidate autoComplete="off" className="main-orders-form">
                    <TextField id="outlined-basic"
                        label="Сумма  заказа"
                        variant="outlined"
                        value='1000 AMD'
                        className='text-field-material'
                        disabled />
                    <TextField
                        id="outlined-basic"
                        label="Комиссия заказа"
                        variant="outlined" value='130(13%)'
                        className='text-field-material'
                        disabled />
                    <TextField
                        id="outlined-basic"
                        label="ID Заказа"
                        variant="outlined"
                        value='OR4532136'
                        className='text-field-material'
                        disabled />
                    <TextField
                        id="outlined-basic"
                        label="ID транзакции ком."
                        variant="outlined"
                        value='TRAZ54564484'
                        className='text-field-material'
                        disabled />
                </form>
                <PaymentTable />
                <form noValidate autoComplete="off" className="main-orders-form">
                    <TextField id="outlined-basic"
                        label="Кешбэк клиента"
                        variant="outlined"
                        value='5(0.5%)'
                        className='text-field-material'
                        disabled />
                    <TextField
                        id="outlined-basic"
                        label="ID транзакции"
                        variant="outlined" value='TRAZ54564510'
                        className='text-field-material'
                        disabled />
                </form>
                <form noValidate autoComplete="off" className="main-orders-form">
                    <TextField id="outlined-basic"
                        label="% Маркетинга"
                        variant="outlined"
                        value='5(0.5%)'
                        className='text-field-material'
                        disabled />
                    <TextField
                        id="outlined-basic"
                        label="ID транзакции"
                        variant="outlined" value='TRAZ54564510'
                        className='text-field-material'
                        disabled />
                </form>
                <form noValidate autoComplete="off" className="main-orders-form">
                    <TextField id="outlined-basic"
                        label="% Gratis"
                        variant="outlined"
                        value='60 (6%)'
                        className='text-field-material'
                        disabled />
                    <TextField
                        id="outlined-basic"
                        label="ID транзакции"
                        variant="outlined" value='TRAZ54564510'
                        className='text-field-material'
                        disabled />
                </form>
            </div>
        )
    }
}
export default Payment;