// import md5 from 'md5'
import StringSimilarity from 'string-similarity';
import _ from 'lodash';

const Sound = {
    soundTextToData: (text) => { 
        // var hash = md5(text).split('').map(c => c.charCodeAt(0)) 
        var hash = new Array(40).fill(0)
        var hash_2 = hash.map(n =>  10 +  _.random(0, 120, false))
        return hash_2
    },
    stringSimilarity: (src, dest) => {
        return StringSimilarity.compareTwoStrings(src, dest)
    },
    generateDataBySimilarPercentage: (data, percentage) => {
        console.log(percentage)
        const newData = data.map(n => n + _.random(10, 20, false) * (Math.random() - 0.5 ? 1 : -1) * (Math.random() <= percentage ? 0 : 1) )

        return newData
    }
}

export default Sound;