import { connect } from 'react-redux';
import { selectPublishFormValues, doUpdatePublishForm } from 'lbry-redux';
import PublishPage from './view';
import { doFetchAccessToken, selectAccessToken } from 'lbryinc';

const select = state => ({
  ...selectPublishFormValues(state),
  accessToken: selectAccessToken(state),
});

const perform = dispatch => ({
  updatePublishForm: value => dispatch(doUpdatePublishForm(value)),
  fetchAccessToken: () => dispatch(doFetchAccessToken()),
});

export default connect(select, perform)(PublishPage);
