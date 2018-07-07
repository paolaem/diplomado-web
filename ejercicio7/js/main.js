$(function () {
    // Selectors
    var pageNav = $('#pageNav'),
        cardCurrentMatch = $('#cardCurrentMatch');
         currentMatchMinute = $('#currentMatchMinute'),
         currentMatchHomeGoals = $('#currentMatchHomeGoals'), 
         currentMatchHomePenalties = $('#currentMatchHomePenalties'),
         currentMatchAwayGoals = $('#currentMatchAwayGoals'),
         currentMatchAwayPenalties = $('#currentMatchAwayPenalties'),
         currentMatchHomeTeam = $('#currentMatchHomeTeam'), 
         currentMatchAwayTeam = $('#currentMatchAwayTeam'),
         currentMatchHomeYellowCards = $('#currentMatchHomeYellowCards'),
         currentMatchHomeRedCards = $('#currentMatchHomeRedCards'),
         currentMatchAwayYellowCards = $('#currentMatchAwayYellowCards'),
         currentMatchAwayPenalties = $('#currentMatchAwayPenalties'),
         cardTemplate = $('#cardTemplate').html(),
         cardContent = $('#cardContent');

    var tabsItems = $('.tabs__item');
    var tabsContents = $('.tabs__content');
    
    //Statements

    pageNav.sticky({
        //topSpacing: 25,
        zIndex: 10,
    });
    
    var template = Handlebars.compile(cardTemplate);
    
    var setCurrentMatchValues = function(data) {
        //Match
        var firstMatch = data[0],
             time = firstMatch.time;

        //Home Team
        var homeGoals = firstMatch.home_team.goals,
             homePenalties = firstMatch.home_team.penalties,
             homeCall = firstMatch.home_team.country,
             homeYellowCards = firstMatch.home_team_statistics.yellow_cards,
             homeRedCards = firstMatch.home_team_statistics.red_cards;

        //Away Team
        var awayGoals = firstMatch.away_team.goals,
             awayPenalties = firstMatch.away_team.penalties,
             awayCall = firstMatch.away_team.country,
             awayYellowCards = firstMatch.away_team_statistics.yellow_cards,
             awayRedCards = firstMatch.away_team_statistics.red_cards;
        
        //Set values
        currentMatchMinute.text(time);
        currentMatchHomeGoals.text(homeGoals);
        currentMatchHomePenalties.text(homePenalties);
        currentMatchAwayGoals.text(awayGoals);
        currentMatchAwayPenalties.text(awayPenalties);
        currentMatchHomeTeam.text(homeCall);
        currentMatchAwayTeam.text(awayCall);
        currentMatchHomeYellowCards.text(homeYellowCards);
        currentMatchHomeRedCards.text(homeRedCards);
        currentMatchAwayYellowCards.text(awayYellowCards);
        currentMatchAwayPenalties.text(awayRedCards);
    };


    //Request

    $.ajax('https://worldcup.sfg.io/matches/current', {
        beforeSend: function() {
            cardCurrentMatch.addClass('loading');
        },
        success: function(data) {
            var myCard = template(data[0]);
            cardContent.append(myCard);
            //setCurrentMatchValues(data);
        },
        error: function(jqXHR, textStatus ) {
            alert('Solo se permiten 10 peticiones por minuto');
        },
        complete: function() {
            cardCurrentMatch.removeClass('loading');
        }
    })
        //.done(setCurrentMatchValues);

        //lightbox config
        lightbox.option({
            albumLabel: "Esta es la imagen %1 de %2",
            disableScrolling: true,
            fadeDuration: 800,
            imageFadeDuration: 800,
            wrapAround: true,
        });

        //Tabs component
        tabsItems.on('click', function() {
            //Obtenemos el numero de índice que ocupa el item al que le hacemos clic
            var indexItem = tabsItems.index(this);

            //Se elimina la clase "active" a todos los items
            tabsItems.removeClass('active');

            //Se elimina la clase "active" a todos los contents
            tabsContents.removeClass('active');

            //Se añade la clase "active" al item sobre el que se hace clic
            $(this).addClass('active');
            $(tabsContents[indexItem]).addClass('active');
        });
});
