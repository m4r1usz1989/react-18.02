var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny'
    },
    {
        id: 3,
        title: 'Władca Pierścieni',
        desc: 'Film o hobbitach',
        image: 'https://ecsmedia.pl/c/wladca-pierscieni-dwie-wieze-wydanie-dwuplytowe-w-iext39346721.jpg'
    },
    {
        id: 4,
        title: 'Gra o tron',
        desc: 'Serial kultowy :D',
        image: 'https://static.antyweb.pl/uploads/2017/08/gra-o-tron-1420x670.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements),
    );

ReactDOM.render(element, document.getElementById('app'));