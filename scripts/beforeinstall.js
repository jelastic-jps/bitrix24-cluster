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
});

return {
  result: 0,
  nodes: nodes
}
