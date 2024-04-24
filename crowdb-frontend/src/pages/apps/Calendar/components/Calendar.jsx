import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import BootstrapTheme from '@fullcalendar/bootstrap'
const Calendar = ({
	onDateClick,
	onEventClick,
	onDrop,
	onEventDrop,
	events,
}) => {
	/*
	 * handle calendar methods
	 */
	const handleDateClick = (arg) => {
		onDateClick(arg)
	}
	const handleEventClick = (arg) => {
		onEventClick(arg)
	}
	const handleDrop = (arg) => {
		onDrop(arg)
	}
	const handleEventDrop = (arg) => {
		onEventDrop(arg)
	}
	return (
		<>
			{/* full calendar control */}
			<div id="calendar">
				<FullCalendar
					initialView="dayGridMonth"
					plugins={[
						dayGridPlugin,
						interactionPlugin,
						timeGridPlugin,
						listPlugin,
						BootstrapTheme,
					]}
					handleWindowResize={true}
					themeSystem="bootstrap"
					buttonText={{
						today: 'Today',
						month: 'Month',
						week: 'Week',
						day: 'Day',
						list: 'List',
						prev: 'Prev',
						next: 'Next',
					}}
					headerToolbar={{
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
					}}
					editable={true}
					selectable={true}
					droppable={true}
					events={events}
					dateClick={handleDateClick}
					eventClick={handleEventClick}
					drop={handleDrop}
					eventDrop={handleEventDrop}
				/>
			</div>
		</>
	)
}
export default Calendar
