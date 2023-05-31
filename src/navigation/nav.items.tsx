import { createBrowserRouter } from 'react-router-dom'
import { LoginPage } from "../pages/login.page/LoginPage";
import { RegistrationPage } from "../pages/registration.page/RegistrationPage";
import { NavItem } from "./types";
import { MainPage } from '../pages/main.page/MainPage';
import { CreateAuctionPage } from '../pages/create.auction.page/CreateAuctionPage';
import { AuctionForCreatorPage } from '../pages/auction.for.creator.page/AuctionForCreatorPage';
import { setRouteParams } from './setRouteParams';
import { AuctionResultsPage } from '../pages/auction.results.page/AuctionResultsPage';
import { AuctionForParticipant } from '../pages/auction.for.participant/AuctionForParticipant';

export enum PageKeys {
    SignIn,
    SignUp,
    Main,
    CreateAuction,
    AuctionForCreator,
    AuctionForParticipant,
    AuctionResults,
}

export const pagesLink = {
    [PageKeys.Main]: '/',
    [PageKeys.SignIn]: '/sign-in',
    [PageKeys.SignUp]: '/sign-up',
    [PageKeys.CreateAuction]: '/create-auction',
    [PageKeys.AuctionForCreator]: '/auction-manager/:auctionId/',
    [PageKeys.AuctionResults]: '/auction-results/:auctionId/',
    [PageKeys.AuctionForParticipant]: '/auction/:auctionId/',
}

export const navItems: {
    [k in PageKeys]?: NavItem
} = {
    [PageKeys.SignIn]: {
        title: 'Войти',
        link: pagesLink[PageKeys.SignIn],
        component: LoginPage,
        getPageUrl: function() {
            return pagesLink[PageKeys.SignIn]
        }
    },
    [PageKeys.SignUp]: {
        title: 'Регистрация',
        link: '/sign-up',
        component: RegistrationPage,
        getPageUrl: function() {
            return pagesLink[PageKeys.SignUp]
        }
    },
    [PageKeys.Main]: {
        title: 'Главная',
        link: pagesLink[PageKeys.Main],
        component: MainPage,
        getPageUrl: function() {
            return pagesLink[PageKeys.Main]
        }
    },
    [PageKeys.CreateAuction]: {
        title: 'Создать аукцион',
        link: pagesLink[PageKeys.CreateAuction],
        component: CreateAuctionPage,
        getPageUrl: function() {
            return pagesLink[PageKeys.CreateAuction]
        }
    },
    [PageKeys.AuctionForCreator]: {
        title: 'Аукцион. Управление',
        link: pagesLink[PageKeys.AuctionForCreator],
        component: AuctionForCreatorPage,
        getPageUrl: function(routeParams: {
            auctionId: string | number
        }) {
            return setRouteParams(pagesLink[PageKeys.AuctionForCreator], routeParams)
        }
    },
    [PageKeys.AuctionResults]: {
        title: 'Аукцион. Результаты',
        link: pagesLink[PageKeys.AuctionResults],
        component: AuctionResultsPage,
        getPageUrl: function(routeParams: {
            auctionId: string | number
        }) {
            return setRouteParams(pagesLink[PageKeys.AuctionResults], routeParams)
        }
    },
    [PageKeys.AuctionForParticipant]: {
        title: 'Аукцион',
        link: pagesLink[PageKeys.AuctionForParticipant],
        component: AuctionForParticipant,
        getPageUrl: function(routeParams: {
            auctionId: string | number
        }) {
            return setRouteParams(pagesLink[PageKeys.AuctionForParticipant], routeParams)
        }
    },
}

const navItemsArray = Object.values(navItems)

export const router = createBrowserRouter(navItemsArray.map(it => {
    const Component = it.component

    return ({
        path: it.link,
        element: <Component />
    })
}))