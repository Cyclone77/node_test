var sql = require('mssql');

var fs = require('fs');
var path = require('path'); //解析需要遍历的文件夹，我这以E盘根目录为例  
var filePath = path.resolve('E:/迅雷下载/3.西藏培训视频（三分频）/15.区党校/3');

var courseArr = [];
var newCourseArr = [];
var sqlList = [];

var zhangjie = [];
//调用文件遍历方法  
fileDisplay(filePath);

/** 
 * 文件遍历方法 
 * @param filePath 需要遍历的文件路径 
 */
function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表  
    fs.readdir(filePath, function(err, files) {
        if (err) {
            console.warn(err)
        } else {
            //遍历读取到的文件列表  
            files.forEach(function(filename) {
                //获取当前文件的绝对路径  
                var title = filename.split('_')[0];
                var item = title;
                var newItem = title;
                var ii = item.indexOf('（上）');
                if (ii > -1) {
                    newItem = item.substr(0, ii);
                }
                var jj = item.indexOf('（中）');
                if (jj > -1) {
                    newItem = item.substr(0, jj);
                }
                var xx = item.indexOf('（下）');
                if (xx > -1) {
                    newItem = item.substr(0, xx);
                }

                let sql_z = `
INSERT INTO Data_DB4_H03
SELECT 
	replace(newid(), '-','') KeyID
	,(SELECT max(DispOrder) + 1 FROM Data_DB4_H03)
	, 1 IsLastRow
	, NULL LastUpdateTime, NULL LastUpdateUser
	, '${filename}' H0301 -- 目录
	, 'admin/Sysmgr/CourseMgr/CourseMgrUpload/zjwCourse/2019/${filename}/study.html' H0302
	, NULL H0303
	, '${newItem}' H0304
	, NULL H0305, NULL H0306 
	, '${title}' H0307
	, NULL H0308, NULL H0105
	, 1 H0309
	, 500 H030A
    , NULL H030B`;
                zhangjie.push(sql_z);
            });
            saveData();

            courseArr.forEach(item => {
                var newItem = item;
                var ii = item.indexOf('（上）');
                if (ii > -1) {
                    newItem = item.substr(0, ii);
                }
                var jj = item.indexOf('（中）');
                if (jj > -1) {
                    newItem = item.substr(0, jj);
                }
                var xx = item.indexOf('（下）');
                if (xx > -1) {
                    newItem = item.substr(0, xx);
                }
                if (newCourseArr.indexOf(newItem) == -1) newCourseArr.push(newItem);
            });

            newCourseArr.forEach(item => {
                var sql = `
INSERT INTO Data_DB4_H01

SELECT 
	replace(newid(), '-','') KeyID
	,(SELECT max(DispOrder) + 1 FROM Data_DB4_H01)
	,NULL
	,NULL
	,'${item}' H0101 -- 标题
	,'-' H0102 -- 主讲人
	,1 H0103
	, getdate()
	, 1 H0105
	, newid() H0108
	, 100 H0106
	, NULL H0110
	, 0 H0111
	, 'B4A86BD5D5CB448281105BA6A6056049' H0112
    , '4D2EB063C324467599BCACE741DEB562' H0113`
                sqlList.push(sql);
            });
        }
    });
}

const config = {
    user: 'sa',
    password: '119119@@@',
    server: '192.168.0.16',
    database: 'GSHRDBII_377_PXPT_XZ'
};

function saveData() {
    sql.connect(config).then(() => {
        return sql.query(zhangjie.join('\n\r'))
    }).then(result => {
        console.dir(result)
    }).catch(err => {
        // ... error checks
    });

    sql.on('error', err => {
        // ... error handler
    });
}