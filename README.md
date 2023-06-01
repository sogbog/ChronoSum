# Chrono Sum

A browser-only web app entirely developed by me(including styling) using React.js and styled components. The main functionality of this app is to perform various kinds of math operations using time. Full support for mobile and other resolutions

For now, there are four tools and it will probably remain this way for a long time. I decided to move on to other projects to employ what I learned on this one, try out other things like TailwindCSS, React Frameworks and study more about backend. Maybe some day I will come back here to see what I can improve and fix.


## Deploy

You can check out the current version [here](http://sogbog.github.io/ChronoSum)
## Available tools and how to use them

***Simple Sum:*** In this tool you can input a specific hour, minute, second and milisecond wich make up the initial time, representing the beginning of some event in any given day. 

In the middle section, you can set an amount of time that you want to add to that initial time (use negative sign "-" to subtract).

e.g. : It's 23:47:35 and i just put the bread to bake on the oven. It will take exactly 78 hours, 43 minutes, 56 seconds and 789 miliseconds for it to be ready, when will this happen? 

![Simple Sum](https://i.imgur.com/kwnpKzU.png)

As you can see, my bread will be ready at exactly 06:31:31:789, 4 days from now. 

You can also change between AM PM formats and disable any input you don't want.


***Duration Sum:*** If you have a bunch of events and whant to know how much time they add up to, this is the tool you want. Here you can create events with a specific duration and the result section will display the sum of the duration of all events.

e.g. : I want to know how much time i've spent studying this week. I just need to separate each studying section in events and input their duration:

![Duration Sum](https://i.imgur.com/nRqGWZZ.png)


***Time Zone Difference:*** Ever wanted to know the time difference between two different locations on the globe? Well, now you can. You just need to search it in the input box and it wil tell you the time in these locations and the difference in hours between the two. Real time can have up to a second of delay

e.g. : I am on vacation in an island at the coast of Brazil and I want to know what time is it for my friend at Norway:

![Time Zone Difference](https://i.imgur.com/C1BZQXh.png)

In this example, my friend's clock will be four hours ahead of mine...


***Recurrent Events:*** The last tool available is certaily the most complicated(and buggy). If you have an event that repeats itself, you can input the time and date that this event started and the frequancy at wich it happens. The days that have some event in them will turn green in the calendar. You can click any day to see its events and the "Events of the day" section will show a list of all events and the time that each one happens. You can add more than one recurring event.

e.g. : I am a police officer that works in 24/72 shifts(each 3 days) and I want to know if I'll have to work on Christmas or not, but today is first of june and I last went to work two days ago, how would I possibly now this? Simple, just add the event and the frequency(72 hours / 3 days). It can start any time since the frequency is a full number of days, but let's assume the shift starts at 07:00 AM.

![Recurrent Events - event](https://i.imgur.com/kSqH1FG.png)

To make this work, I need to input 3 days wich is the time that the event takes to happen again(72 hours) and to account for the hours that I spent working, more 24 hours. I could input all into one field, like 4 days or 96 hours, but i feel like this way is easier to understand. Now that I have the events on the calendar, i just need to roll up to December and see what's up:

![Recurrent Events - calendar](https://i.imgur.com/qin98qU.png)

As you can see, December 25th is not green, so this means I won't need to go to work! But, as all things in life, its not that simple... The day selected(marked by the square around the day) is 12/24 and I have work at 7:00 AM. This means that on Christmas, I'll leave work at 07:00 AM(because of the 24 hour shift) and be tired for the rest of the day, and besides, I'll spent Christmas Eve working...
## Technical Difficulties

The challenges i faced were proportional to each tool's complexity

On the first one, the main thing that it demanded was pure Javascript logic to execute the time math correctly and display the numbers in the right way when needed. I also learned more about React states as it uses a bunch of them in different ways.

The second one was probably the easiest, with no major trouble

In the third tool I designed was where I started to struggle a bit. Making this page I learned how to use Google's APIs and experimented a lot with Javascript's Date API. 

Finally, the challenges of designing fourth tool started when I couldn't find a calendar module that fitted my needs, so I decided to make my own from scratch. This alone was a greater challenge than all the trest of the app. Integrating it with the events and the display of each day took a lot of brainstorming, but i managed to get a result I am satisfied with. The only thing I feel I'm leaving behind is the month field in the frequency area of the event. I spent a few days testing a bunch of ideas but could not find a solution. I know it can be fixed but, as I said in the beginning, I want to move on and this would take a lot of time since I would probably need to redo all of the logic.