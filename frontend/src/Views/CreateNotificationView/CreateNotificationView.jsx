import React from 'react';
import { ShowFromRight } from '../../Animations/Animations';
import Routes from '../../Routes/Routes';
import ShowFromTheLeft from '../../Templates/ShowFromLeftTemplate/ShowFromLeftTemplate';

const CreateNotificationView = () => {
    return (
        <ShowFromTheLeft closePath={Routes.projects}>
            Create Notification:
        </ShowFromTheLeft>
    );
}

export default CreateNotificationView;