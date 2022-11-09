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
  nodeType: "mysql",
  cloudlets: 10,
  count: 2
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
  tag: "2.4.52-python-3.6.15",
  nodeType: "apache-python",
  nodeGroup: "cp2",
  cloudlets: 16,
  count: 2
});

return {
  result: 0,
  nodes: nodes
}
