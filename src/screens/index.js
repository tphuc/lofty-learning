import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import RouteURL from '../components/RouteURL';
import { HomeSwitch } from './transition';
import { ParentProfile, ParentHome } from './parent';
import { ChildHome } from './child';
import Curriculum from './parent/curriculum';

const IndexRouting = () => {
    return(
        <NativeRouter>
            <Route exact path={RouteURL.switch_account} component={HomeSwitch}></Route>
            <Route path={RouteURL.parent_home} component={ParentHome} />
            <Route path={RouteURL.parent_profile} component={ParentProfile} />
            <Route path={RouteURL.child_home} component={ChildHome} />
            <Route path={RouteURL.parent_curriculum} component={Curriculum}/>
        </NativeRouter>
    )
}

export default IndexRouting;