var express = require('express');
var app = express();

app.use(express.static(__dirname +'./../../')); //serves the index.html

app.get('/api/stations', (req, res) => {
    res.json(
        [
            {
                id: 1, name: 'CFCR',
                audio_feed: 'http://onair.cfcr.ca/hifi.mp3',
                home_page: 'http://cfcr.ca/',
                city: 'Saskatoon',
                province: 'SK',
                description: 'sjndfahfbasdfnas;na',
                frequency: '90.5 FM',
                language: 'English',
                stream_type: 'audio/mp3'
            },
            {
                id: 2,
                name: 'CFMU',
                audio_feed: 'http://138.197.136.105:8000/mount.128mp3',
                home_page: 'http://cfmu.ca/',
                city: 'Hamilton',
                province: 'ON',
                description: 'ajndfbasdblfjsdfnja;',
                frequency: '93.3 FM',
                language: 'English',
                stream_type: 'audio/mp3'
            },
            {
                id: 3,
                name: 'CKUW',
                audio_feed: 'http://shout.mtl.gameservers.com:9025/;stream.nsv&type=mp3',
                home_page: 'https://ckuw.ca',
                city: 'Winnipeg',
                province: 'MB',
                description: 'vbjsdalhasjv;ad',
                frequency: '95.9 FM',
                language: 'English',
                stream_type: 'audio/mp3'
            },
            {
                id: 4,
                name: 'CJSW',
                audio_feed: 'http://stream.cjsw.com/cjsw.mp3',
                home_page: 'http://cjsw.com',
                city: 'Calgary',
                province: 'AB',
                description: 'test description test description test description',
                frequency: '90.9 FM',
                language: 'English',
                stream_type: 'audio/mp3'
            },
            {
                id: 5,
                name: 'CKCU',
                audio_feed: 'http://livestream.ckcufm.com/ckcu.mp3',
                home_page: 'https://www.ckcufm.com/',
                city: 'Ottawa',
                province: 'ON',
                description: 'test description test description test description',
                frequency: '93.1 FM',
                language: 'English',
                stream_type: 'audio/mp3'
            },
            {
                id: 6,
                name: 'CIVL',
                audio_feed: 'http://198.162.116.249:8085/live.mp3',
                home_page: 'http://civl.ca/',
                city: 'Abbotsford',
                province: 'BC',
                description: 'test description test description test description',
                frequency: '101.7 FM',
                language: 'English',
                stream_type: 'audio/mp3'
            },
            {
                id: 7,
                name: 'CHMR',
                audio_feed: 'http://mp3srv.munsu.mun.ca:8000/',
                home_page: 'http://www.mun.ca/chmr/',
                city: 'St. John\'s',
                province: 'NF',
                description: 'test description test description test description',
                frequency: '93.5 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 8,
                name: 'CHUO',
                audio_feed: 'http://icecast1.isiglobal.ca:8000/chuo',
                home_page: 'http://chuo.fm/',
                city: 'Ottawa',
                province: 'ON',
                description: 'test description test description test description',
                frequency: '90.9 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 9,
                name: 'CJLO',
                audio_feed: 'http://rosetta.shoutca.st:8883/stream',
                home_page: 'http://www.cjlo.com/',
                city: 'Montreal',
                province: 'QC',
                description: 'test description test description test description',
                frequency: '1690 AM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 10,
                name: 'CKDU',
                audio_feed: 'http://archive1.ckdu.ca:9750/ckdu_1_on_air_high.mp3',
                home_page: 'http://www.ckdu.ca',
                city: 'Halifax',
                province: 'NS',
                description: 'test description test description test description',
                frequency: '88.1 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 11,
                name: 'CKXU',
                audio_feed: 'http://ckxu.uleth.ca:8000/stream/5/',
                home_page: 'http://ckxu.com/',
                city: 'Lethbridge',
                province: 'AB',
                description: 'test description test description test description',
                frequency: '88.3 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 12,
                name: 'CKUT',
                audio_feed: 'https://icecast.ckut.ca/903fm-192-stereo',
                home_page: 'https://ckut.ca/en',
                city: 'Montreal',
                province: 'QC',
                description: 'test description test description test description',
                frequency: '90.3 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 13,
                name: 'CITR',
                audio_feed: 'http://live.citr.ca:8000/live.mp3',
                home_page: 'http://www.citr.ca/',
                city: 'Vancouver',
                province: 'BC',
                description: 'test description test description test description',
                frequency: '101.9 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 14,
                name: 'CFMH',
                audio_feed: 'http://cfmh-listen.unbsj.ca:8000/1/;stream/1',
                home_page: 'http://localfm.ca/',
                city: 'Saint John',
                province: 'NB',
                description: 'test description test description test description',
                frequency: '107.3 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 15,
                name: 'CFRC',
                audio_feed: 'http://audio.cfrc.ca:8000/;stream.nsv&type=mp3',
                home_page: 'http://www.cfrc.ca/',
                city: 'Kingston',
                province: 'ON',
                description: 'test description test description test description',
                frequency: '101.9 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 16,
                name: 'CFRU',
                audio_feed: 'http://archive.cfru.ca:8888/cfruhi2',
                home_page: 'http://www.cfru.ca/',
                city: 'Guelph',
                province: 'ON',
                description: 'test description test description test description',
                frequency: '93.3 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 17,
                name: 'CFRO',
                audio_feed: 'http://192.99.20.78:9025/cfro_128k',
                home_page: 'http://www.coopradio.org/',
                city: 'Vancouver',
                province: 'BC',
                description: 'test description test description test description',
                frequency: '100.5 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 18,
                name: 'CFUR',
                audio_feed: 'http://142.207.5.73:8001/',
                home_page: 'http://cfur.ca/',
                city: 'Prince George',
                province: 'BC',
                description: 'test description test description test description',
                frequency: '88.7 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 19,
                name: 'CHMA',
                audio_feed: 'http://chma-nicecast.mta.ca:8000/',
                home_page: 'https://chmafm.wordpress.com/',
                city: 'Sackville',
                province: 'NB',
                description: 'test description test description test description',
                frequency: '106.9 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 20,
                name: 'CHOQ',
                audio_feed: 'http://podcast.servlinks.com/choq/lecture/choqliveaudio/1513139441635',
                home_page: 'http://www.choq.ca/',
                city: 'Saint Catherine',
                province: 'QC',
                description: 'test description test description test description',
                frequency: '',
                language: 'French',
                stream_type: 'audio/mpeg'
            },
            {
                id: 21,
                name: 'CHYZ',
                audio_feed: 'http://ecoutez.chyz.ca:8000/mp3',
                home_page: 'http://chyz.ca/',
                city: 'Saint-Foye',
                province: 'QC',
                description: 'test description test description test description',
                frequency: '94.3 FM',
                language: 'French',
                stream_type: 'audio/mpeg'
            },
            {
                id: 22,
                name: 'CICK',
                audio_feed: 'https://usa13.fastcast4u.com/proxy/smithers?mp=/1',
                home_page: 'http://www.smithersradio.com/',
                city: 'Smithers',
                province: 'BC',
                description: 'test description test description test description',
                frequency: '',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 23,
                name: 'CILU',
                audio_feed: 'http://luradio-server.lakeheadu.ca:8000/stereo128.mp3',
                home_page: 'http://www.luradio.ca/',
                city: 'Thunder Bay',
                province: 'ON',
                description: 'test description test description test description',
                frequency: '102.7 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 24,
                name: 'CJLY',
                audio_feed: 'http://stream.cjly.net/',
                home_page: 'http://www.kootenaycoopradio.com/',
                city: 'Nelson',
                province: 'BC',
                description: 'test description test description test description',
                frequency: '93.5 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 25,
                name: 'CJMP',
                audio_feed: 'http://usa2.fastcast4u.com:3264/CJMP90.1FM',
                home_page: 'http://cjmp.ca/',
                city: 'Powell River',
                province: 'BC',
                description: 'test description test description test description',
                frequency: '90.1 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 26,
                name: 'CJRU',
                audio_feed: 'http://ryerson.out.airtime.pro:8000/ryerson_a?callback=?',
                home_page: 'http://www.thescopeatryerson.ca/',
                city: 'Toronto',
                province: 'ON',
                description: 'test description test description test description',
                frequency: '1280 AM',
                language: 'English',
                stream_type: 'audio/mpeg'
            },
            {
                id: 27,
                name: 'CFUV',
                audio_feed: 'http://cfuv.streamon.fm:8000/CFUV-64k.aac',
                home_page: 'http://www.cfuv.ca',
                city: 'Victoria',
                province: 'BC',
                description: 'test description test description test description',
                frequency: '101.9 FM',
                language: 'English',
                stream_type: 'audio/aac'
            },
            {
                id: 28,
                name: 'CJSR',
                audio_feed: 'http://cjsr.streamon.fm:8000/CJSR-64k.aac',
                home_page: 'http://www.cjsr.com/',
                city: 'Edmonton',
                province: 'AB',
                description: 'test description test description test description',
                frequency: '88.5 FM',
                language: 'English',
                stream_type: 'audio/aac'
            },
            {
                id: 29,
                name: 'CFBX',
                audio_feed: 'http://thexaudio.tru.ca:8002/in/;?type=http&nocache=88%2Fstream.mp3&_=1',
                home_page: 'https://thex.ca/',
                city: 'Kamloops',
                province: 'BC',
                description: 'test description test description test description',
                frequency: '92.5 FM',
                language: 'English',
                stream_type: 'audio/mpeg'
            }
        ]
    )

})

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
console.log('listening on port 3000');