import React from 'react';
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';
import { Grid } from './styles';
interface ChildrenProps {
    children: React.ReactNode;
}
const Layout: React.FC<ChildrenProps>= ({ children }) => {
    return (
        <div>
            <Grid>
                <Aside />
                <MainHeader />
                <Content>{children}</Content>
            </Grid>
        </div>
    );
};

export default Layout;
