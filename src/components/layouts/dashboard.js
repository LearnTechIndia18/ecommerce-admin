import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {AC_LIST_FAQ} from '../actions/faq'
import {AC_LIST_PAGE} from '../actions/pages'
import {AC_LIST_COUNTRY} from '../actions/country'
import {AC_LIST_IMAGES} from '../actions/category'
import {AC_LIST_CURRENCY} from '../actions/currency'
import {AC_LIST_LANGUAGE} from '../actions/language'
import {AC_LIST_NEWSLETTER} from '../actions/newsletter'
import {AC_LIST_PAYMENT} from '../actions/payment'
import {AC_LIST_CONFIGURATION} from '../actions/config'
import { TabTitle } from '../util/DynamicTab';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
}
componentDidMount() {
    this.props.AC_LIST_COUNTRY();
    this.props.AC_LIST_FAQ();
    this.props.AC_LIST_IMAGES();
    this.props.AC_LIST_PAGE();
}

  render() {
    TabTitle('Dashboard');
    // Get the data from the Reducer
    var Faq=this.props.faqsReducer.faqList;
    var Page=this.props.pagesReducer.pageList;
    var Country=this.props.countryReducer.countryList;
    var Category=this.props.imagesReducer.listImages;
    var Currency=this.props.currencyReducer.currencyList;
    var Language=this.props.LanguageReducer.languageList;

    var Newsletter=this.props.NewsletterReducer.newsletterList;
    
    var Payment=this.props.PaymentReducer.paymentList;
    var Config=this.props.ConfigReducer.configList;
    return (
      <div class="main-panel" >
        <div class="content-wrapper cw-main" style={{ background: 'white' }} >
          <div class="page-header">
            <h3 class="page-title">
              <span class="page-title-icon bg-gradient-primary text-white me-2">
                <i class="mdi mdi-home"></i>
              </span> Dashboard
            </h3>
            <nav aria-label="breadcrumb">
              <ul class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">
                  <span></span>Overview <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                </li>
              </ul>
            </nav>
          </div>
          <div class="row">
            <div class="col-md-4 stretch-card bck-color grid-margin">
              <Link to="/listFaq" style={{ textDecoration: 'none' }}>
                <div class="card bg-gradient-danger card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Faq Management <i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{Faq.length}</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-4 stretch-card bck-color grid-margin" style={{position:'relative',right:'70px'}}>
              <Link to="/listPage" style={{ textDecoration: 'none' }}>
                <div class="card bg-gradient-info card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Page Management <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{Page.length}</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-4 stretch-card bck-color grid-margin"style={{position:'relative',right:'135px'}}>
              <Link to="/listCountry" style={{ textDecoration: 'none' }}>
                <div class="card bg-gradient-success card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Country Management <i class="mdi mdi-diamond mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{Country.length}</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-4 stretch-card bck-color grid-margin" >
              <Link to="/listImages" style={{ textDecoration: 'none' }}>
                <div class="card bg-gradient-info card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Category Management <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{Category.length}</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-4 stretch-card bck-color grid-margin" style={{position:'relative',right:'90px'}}>
              <Link to="/listCurrency" style={{ textDecoration: 'none' }}>
                <div class="card bg-gradient-danger card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Currency Management <i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{Currency.length}</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-4 stretch-card bck-color grid-margin"style={{position:'relative',right:'135px'}}>
              <Link to="/listLanguage" style={{ textDecoration: 'none' }}>
                <div class="card bg-gradient-success card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Language Management <i class="mdi mdi-diamond mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{Language.length}</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-4 stretch-card bck-color grid-margin" style={{position:'relative' }}>
              <Link to="/listNewsletter" style={{ textDecoration: 'none' }}>
                <div class="card bg-gradient-danger card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Newsletter Management <i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{Newsletter.length}</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-4 stretch-card bck-color grid-margin" style={{position:'relative' ,right:'90px'}}>
              <Link to="/listPayment" style={{ textDecoration: 'none' }}>
                <div class="card bg-gradient-info card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Payment Management <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{Payment.length}</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-4 stretch-card bck-color grid-margin"style={{position:'relative',right:'135px'}}>
              <Link to="/listConfig" style={{ textDecoration: 'none' }}>
                <div class="card bg-gradient-success card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Configuration Management <i class="mdi mdi-diamond mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{Config.length}</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log('map state', state);
  return {
      faqsReducer: state.FAQ_Reducer,
      countryReducer: state.COUNTRY_Reducer,
      imagesReducer: state.imagesReducer,
      pagesReducer: state.PAGE_Reducer,
      currencyReducer:state.CURRENCY_Reducer,
      LanguageReducer:state.LANGUAGE_Reducer,
      NewsletterReducer:state.NEWSLETTER_Reducer,
      PaymentReducer:state.PAYMENT_Reducer,
      ConfigReducer:state.CONFIGURATION_Reducer
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ AC_LIST_COUNTRY, AC_LIST_FAQ, AC_LIST_IMAGES, AC_LIST_PAGE,AC_LIST_CURRENCY,AC_LIST_LANGUAGE,AC_LIST_NEWSLETTER,AC_LIST_PAYMENT,AC_LIST_CONFIGURATION}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);