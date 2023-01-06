var nodes = [];
if ('${settings.ls-addon:false}'== 'true') {
  nodes.push({
    nodeType: "litespeedadc",
    nodeGroup: "bl",
    cloudlets: 8,
    count: 2
  },{
    nodeType: "litespeedphp",
    links: "sqldb:DB",
    nodeGroup: "cp",
    cloudlets: 16,
    count: 2
  });
} else {
  nodes.push({
    nodeType: "nginx",
    links: "sqldb:DB",
    nodeGroup: "bl",
    cloudlets: 16,
    count: 2
  }, {
    nodeType: "nginxphp",
    links: "sqldb:DB",
    nodeGroup: "cp",
    cloudlets: 16,
    count: 2
  });
}

nodes.push({
  nodeType: "mariadb-dockerized",
  cloudlets: 10,
  count: 3,
  cluster: {
    scheme: "galera",
    db_user: "${globals.DB_USER}",
    db_pass: "${globals.DB_PASS}",
    is_proxysql: false
  },
  env: {
    SCHEME: "galera",
    DB_USER: "${globals.DB_USER}",
    DB_PASS: "${globals.DB_PASS}",
    IS_PROXYSQL: false
  } 
}, {
  nodeType: "memcached",
  cloudlets: 16,
  count: 2
},{
  nodeType: "storage",
  count: 1,
  flexibleCloudlets: ${settings.st_flexibleCloudlets:8},
  fixedCloudlets: ${settings.st_fixedCloudlets:1},
  nodeGroup: "storage",
  validation: {
    minCount: 1,
    maxCount: 1
  }
},{
  "displayName": "Push Server",
  tag: "2.4.53-python-3.7.12",
  nodeType: "apache-python",
  nodeGroup: "cp2",
  cloudlets: 16
});

return {
  result: 0,
  nodes: nodes
}
