import React, {useEffect, useState} from 'react';
// import {StyleSheet} from 'react-native';
// import {Calendar, CalendarList, CalendarProvider} from 'react-native-calendars';

// const CalendarApp = () => {
//   const [selected, setSelected] = useState('');

//   return (
//     <CalendarProvider>
//       <CalendarList
//         horizontal={true}
//         pagingEnabled={true}
// onDayPress={day => {
//   setSelected(day.dateString);
//   console.log(day.dateString);
// }}
//         markedDates={{
//           [selected]: {
//             selected: true,
//             selectedColor: 'orange',
//           },
//         }}
//         style={styles.calendar}
//       />
//     </CalendarProvider>
//   );
// };

// export default CalendarApp;

// const styles = StyleSheet.create({
//   calendar: {
//     marginTop: '10%',
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import RNCalendarEvents from 'react-native-calendar-events';
import {AddIcon, AddIconLarge, DeleteIcon} from '../../assets/svgs';

const CalendarApp = () => {
  const date = new Date();
  const [selected, setSelected] = useState(date.toISOString().split('T')[0]);
  const [isMarked, setMarked] = useState(false);
  const [eventText, setEventText] = useState('');
  const [pressed, setPressed] = useState(false);
  const [events, setEvents] = useState({});
  const [showEvents, setShowEvents] = useState(false);
  const [eventId, setEventId] = useState([]);

  const getCalendarId = async () => {
    const permission = await RNCalendarEvents.requestPermissions();
    const allCalendars = await RNCalendarEvents.findCalendars();
    const useCalendar = allCalendars.filter(item => item.isPrimary);
    // console.log(permission);
    // console.log(newStatus);
    // console.log(allCalendars);
    console.log(useCalendar);
  };
  const fetchEvents = async () => {
    const allCalendars = await RNCalendarEvents.findCalendars();
    const useCalendar = allCalendars.filter(item => item.isPrimary);
    const allEvents = await RNCalendarEvents.fetchAllEvents(
      '2023-09-14T00:00:00.000Z',
      '2023-09-18T00:00:00.000Z',
      [useCalendar[0].id],
    );
    console.log('hello');
    console.log(useCalendar[0].id);
    console.log(allEvents);
  };

  const addNewEvent = async () => {
    setPressed(!pressed);
    if (eventText.trim() === '') {
      // Don't add empty event
      return;
    }
    eventId.push(
      await RNCalendarEvents.saveEvent(eventText, {
        startDate: selected + 'T00:00:00.000Z',
        endDate: selected + 'T00:00:00.000Z',
      }),
    );
    setEventText('');
    setShowEvents(true);
    console.log(eventId);
  };

  return (
    <>
      <View style={styles.container}>
        {/* <Agenda
      items={items}
      loadItemsForMonth={loadItems}
      selected={'2023-09-12'}
      marked={false}
      refreshControl={null}
      showClosingKnob={true}
      refreshing={false}
      renderItem={renderItem}
    /> */}
        <Agenda
          onDayPress={day => {
            setSelected(day.dateString);
            setPressed(false);
            // console.log(day.dateString);
          }}
          marking={isMarked}
          items={{
            [selected]: [
              {
                name: 'temp',
              },
            ],
          }}
          renderItem={() =>
            !pressed ? (
              <>
                <View>
                  <Text style={styles.eventHeading}>
                    Your Events for the Day
                  </Text>
                  {events[selected] &&
                    events[selected].map((event, index) => (
                      <Text key={index} style={styles.events}>
                        - {event}
                      </Text>
                    ))}
                </View>
                <View style={styles.addButton}>
                  <TouchableOpacity
                    onPress={() => setPressed(!pressed)}
                    activeOpacity={0.8}>
                    <AddIconLarge />
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <View style={styles.textBoxContainer}>
                  <TextInput
                    placeholder="Enter Event"
                    onChangeText={text => setEventText(text)}
                    value={eventText}
                    style={styles.textInput}
                  />
                  <TouchableOpacity
                    onPress={addNewEvent}
                    activeOpacity={0.8}
                    style={styles.addIcon}>
                    <AddIcon />
                  </TouchableOpacity>
                </View>
              </>
            )
          }
        />
        <StatusBar />
      </View>
      <View style={{flex: 0.3}}>
        <Text>Some More Functionalities Here</Text>
        <TouchableOpacity onPress={fetchEvents}>
          <Text> Press Me! </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 0.5,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  addButton: {
    flex: 1,
    position: 'absolute',
    borderRadius: 100,
    justifyContent: 'center',
    marginTop: '142%',
    marginLeft: '70%',
  },
  textBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 100,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 3,
    paddingLeft: '4%',
    marginTop: '10%',
    marginRight: '5%',
  },
  addIcon: {
    margin: 2,
  },
  textInput: {
    paddingVertical: 10,
    width: '85%',
  },
  eventHeading: {
    letterSpacing: 1,
    fontWeight: '600',
    fontSize: 24,
    paddingTop: '10%',
  },
  events: {
    lineHeight: 50,
    letterSpacing: 0.5,
    fontSize: 20,
  },
  eventsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CalendarApp;
