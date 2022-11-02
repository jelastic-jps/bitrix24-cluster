import com.hivext.api.Response;

//quotas for checking
var perEnv = "environment.maxnodescount",
    maxEnvs = "environment.maxcount",
    perNodeGroup = "environment.maxsamenodescount",
    maxCloudletsPerRec = "environment.maxcloudletsperrec";

var WARNING = "warningField",
  LS = "ls-addon",
  lsAppid = "9e6afcf310004ac84060f90ff41a5aba",
  group = jelastic.billing.account.GetAccount(appid, session),
  isLS = jelastic.dev.apps.GetApp(lsAppid),
  settings = jps.settings,
  fields = [],
  quotas,
  resp;

resp = jelastic.billing.account.GetQuotas(perEnv + ";"+maxEnvs+";" + perNodeGroup + ";" + maxCloudletsPerRec );
if (resp.result != 0) return resp;
quotas = resp.array;

for (var i = 0, field; field = jps.settings.fields[i]; i++)
  fields[field.name] = field;

if (isLS.result == 0 || isLS.result == Response.PERMISSION_DENIED) {  
  fields[LS].hidden = false;
  fields[LS].value = true;
} else {
  fields[LS].hidden = true;
  fields[LS].value = false;
  fields[LS].showIf = null;
}

if (group.groupType == 'trial') {
    if (group.groupType == 'trial')
      fields["warningField"].markup = "Bitrix24 cluster is not available for " + group.groupType + ". Please upgrade your account.";
    fields[WARNING].cls = "warning";
    fields[WARNING].hidden = false;
    fields[WARNING].height = 30;
}

return {
  result: 0,
  settings: settings
};
