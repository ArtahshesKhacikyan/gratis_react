import React from 'react';
import Loader from 'react-loader-spinner';
import strings from '../../../resources/en/strings';

class LoadingView extends React.Component {

    render() {
        return (
            <div className='loader'>
                <Loader
                    type='Oval'
                    color='#f29843'
                    height='150'
                    width='150'
                />
                <div className='loader-title'>
                    <p>{strings.loading}</p>
                </div>
            </div>
        );
    }
}

export default LoadingView;