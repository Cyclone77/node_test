var sql = require('mssql');

var fs = require('fs');
var path = require('path'); //解析需要遍历的文件夹，我这以E盘根目录为例  
var filePath = path.resolve('E:/迅雷下载/3.西藏培训视频（三分频）/15.区党校/3');

var courseArr = [];
var sqlList = [];
var fileList = [];
var zhangjie = [];

var cishu = 0;
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
                var filedir = path.join(filePath, filename);
                var file_child = `${filedir}/contents/content_PNG`;

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

                fs.readdir(file_child, 'binary', function(err, fileschild) {
                    if (err) {
                        console.warn(err)
                    } else {
                        var file_png = `${file_child}/${fileschild[0]}`;
                        //var decodedImage = new Buffer(originalBase64ImageStr, 'base64')
                        fs.readFile(file_png, 'base64', function(err, filedata) {
                            if (err) {
                                console.log(err);
                                return;
                            } else {
                                var buf = new Buffer(filedata, 'base64');
                                if (courseArr.indexOf(newItem) > -1)
                                    fileList.push({
                                        name: newItem,
                                        buf: buf
                                    });
                                courseArr.push(newItem);
                            }
                            if (courseArr.length == files.length) {
                                saveData();
                            }
                        })
                    }
                })
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
        fileList.forEach(item => {
            const request = new sql.Request()
            request.input('H0110', sql.VarBinary, item.buf);
            request.input('H0101', sql.NVarChar, item.name)
            request.query(`UPDATE Data_DB4_H01 SET H0110 = @H0110 WHERE H0101 = @H0101`, (err, result) => {
                console.dir(result)
            })
        });
        // var item = fileList[0];
        // const request = new sql.Request()
        // request.input('H0110', sql.VarBinary, item.buf);
        // request.input('H0101', sql.NVarChar, item.name)
        // request.query(`UPDATE Data_DB4_H01 SET H0110 = @H0110 WHERE H0101 = @H0101`, (err, result) => {
        //         console.dir(result)
        //     })
        //return sql.query()
    }).then(result => {
        console.dir(result)
    }).catch(err => {
        // ... error checks
    });

    sql.on('error', err => {
        // ... error handler
    });
};