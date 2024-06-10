const getMonth = (callback) =>{
    setTimeout(()=>{
        let error = false
        let month = ['Januari','Febuari','Maret','April',
                    'Mei','Juni','Juli','Agustus','September',
                    'Oktober','November','Desember']
        if(!error){
            callback(null,month)
        }else{
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}
function showMonth(params, month) {
    const map = month.map((month) => month);
    console.log(map)
}

getMonth(showMonth)