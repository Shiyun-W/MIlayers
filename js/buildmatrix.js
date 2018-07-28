var buildmatrix = function(nodes, links) {

    // 生成数据矩阵
    var matrix = new Array(nodes.length);
    var nodesname = []
    for (var i = 0; i < nodes.length; i++)
        {
		    nodesname[i] = nodes[i].nodes;
            matrix[i] = new Array(nodes.length);
            for (var j = 0; j < nodes.length; j++)
                {
                    matrix[i][j] = 0;
                }
        }
    for (var i = 0; i < links.length; i++)
        {
            var toid1 = parseInt(links[i].外围连接词);
            var id2 = parseInt(links[i].中间词);
            matrix[id2][toid1] = 1;
        }
		
    return {
	matrix:  matrix,
    nodesname: nodesname
	}
};