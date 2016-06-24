require("./css/SummaryPanel.css");

import React from 'react';
import loadingUnless from '../util/loadingUnless.jsx';
import httpGETRequest from '../util/httpGETRequest.js';

const API_HOSTNAME = 'http://buttebot.dpbox.es:3000/api';

class SummaryPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queuedDomainCount: null,
      domainsWithTomatoesCount: null,
      domainsWithoutTomatoesCount: null,
    }
  }

  componentWillMount() {
    httpGETRequest(`${API_HOSTNAME}/queued-domains`, responseBody => {
      this.setState({
        queuedDomainCount: responseBody.count,
      });
    })

    httpGETRequest(`${API_HOSTNAME}/crawled-domains?pages[is_empty]=true`, responseBody => {
      this.setState({
        domainsWithoutTomatoesCount: responseBody.count,
      });
    })

    httpGETRequest(`${API_HOSTNAME}/crawled-domains?pages[is_empty]=false`, responseBody => {
      this.setState({
        domainsWithTomatoesCount: responseBody.count,
      });
    })
  }

  render() {
    const { state } = this;

    const domainsWithoutTomatoesInfo = (
      <CountDialogue
        count={state.domainsWithoutTomatoesCount}
        label='domains that dont care about tomatoes'
      />
    );

    const domainsWithTomatoesInfo = (
      <CountDialogue
        count={state.domainsWithTomatoesCount}
        label='domains talking about TOMATOES'
      />
    );

    const queuedDomainsInfo = (
      <CountDialogue
        count={state.queuedDomainCount}
        label='domains in queue'
      />
    );

    return (
      <div className='SummaryPanel'>
        {domainsWithoutTomatoesInfo}
        {domainsWithTomatoesInfo}
        {queuedDomainsInfo}
      </div>
    );
  }
}

class CountDialogue extends React.Component {
  render() {
    const { props } = this;

    const count = loadingUnless(props.count, () => {
      return ( props.count );
    })

    return (
      <div>
        {props.label}: {count}
      </div>
    )
  }
}

export default SummaryPanel;
