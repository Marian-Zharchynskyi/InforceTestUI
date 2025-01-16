import * as UserActionCreators from "../state/actions/userActions";
import * as RoleActions from "../state/actions/rolesActions";
import * as AppSettingActions from "../state/actions/appSettingActions";
import * as UrlActions from "../state/actions/urlActions";

const actions = {
  ...UserActionCreators,
  ...RoleActions,
  ...AppSettingActions,
  ...UrlActions
};

export default actions;
