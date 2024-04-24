import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PageBreadcrumb2 } from '@/components'
//data
import { defaultEvents } from './data'
import Introduction from './components/Introduction'
import CalendarWidget from './components/CalendarWidget'
import Calendar from './components/Calendar'
import Events from './components/Events'
import AddEditEvent from './components/AddEditEvent'
const CalendarApp = () => {
	/*
	 * modal handeling
	 */
	const [show, setShow] = useState(false)
	const onCloseModal = () => {
		setShow(false)
		setEventData({})
		setDateInfo({})
	}
	const onOpenModal = () => setShow(true)
	const [isEditable, setIsEditable] = useState(false)

	/*
	 * event data
	 */
	const [events, setEvents] = useState([...defaultEvents])
	const [eventData, setEventData] = useState({})
	const [dateInfo, setDateInfo] = useState({})
	/*
     calendar events
     */
	// on date click
	const onDateClick = (arg) => {
		setDateInfo(arg)
		onOpenModal()
		setIsEditable(false)
	}

	// on event click
	const onEventClick = (arg) => {
		const event = {
			id: String(arg.event.id),
			title: arg.event.title,
			className: arg.event.classNames[0],
		}
		setEventData(event)
		setIsEditable(true)
		onOpenModal()
	}

	// on drop
	const onDrop = (arg) => {
		const dropEventData = arg
		const title = dropEventData.draggedEl.title
		if (title) {
			const newEvent = {
				id: String(events.length + 1),
				title: title,
				start: dropEventData ? dropEventData.dateStr : new Date(),
				className: dropEventData.draggedEl.attributes['data-class']['value'],
			}
			const modifiedEvents = [...events]
			modifiedEvents.push(newEvent)
			setEvents(modifiedEvents)
		}
	}

	/*
     on add event 
     */
	const onAddEvent = (data) => {
		const modifiedEvents = [...events]
		const event = {
			id: String(modifiedEvents.length + 1),
			title: data.title,
			start: Object.keys(dateInfo).length !== 0 ? dateInfo.date : new Date(),
			className: data.className,
		}
		modifiedEvents.push(event)
		setEvents(modifiedEvents)
		onCloseModal()
	}

	/*
     on update event
     */
	const onUpdateEvent = (data) => {
		const modifiedEvents = [...events]
		const idx = modifiedEvents.findIndex((e) => e['id'] === eventData.id)
		modifiedEvents[idx]['title'] = data.title
		modifiedEvents[idx]['className'] = data.className
		setEvents(modifiedEvents)
		onCloseModal()
		setIsEditable(false)
	}

	/*
     on remove event
     */
	const onRemoveEvent = () => {
		const modifiedEvents = [...events]
		const idx = modifiedEvents.findIndex((e) => e['id'] === eventData.id)
		modifiedEvents.splice(idx, 1)
		setEvents(modifiedEvents)
		onCloseModal()
	}

	/**
	 * on event drop
	 */
	const onEventDrop = (arg) => {
		const modifiedEvents = [...events]
		const idx = modifiedEvents.findIndex((e) => e['id'] === arg.event.id)
		modifiedEvents[idx]['title'] = arg.event.title
		modifiedEvents[idx]['className'] = arg.event.classNames
		modifiedEvents[idx]['start'] = arg.event.start
		modifiedEvents[idx]['end'] = arg.event.end
		setEvents(modifiedEvents)
		setIsEditable(false)
	}
	return (
		<Container fluid>
			<PageBreadcrumb2 title="Calendar" appName="Apps" />
			<Row>
				<Col xs={12}>
					<Introduction />
				</Col>
			</Row>
			<Row>
				<Col lg={3}>
					<CalendarWidget />
					<Events />
				</Col>

				<Col lg={9}>
					<Calendar
						onDateClick={onDateClick}
						onEventClick={onEventClick}
						onDrop={onDrop}
						onEventDrop={onEventDrop}
						events={events}
					/>
				</Col>
			</Row>

			{/* add new event modal */}
			{show ? (
				<AddEditEvent
					isOpen={show}
					onClose={onCloseModal}
					isEditable={isEditable}
					eventData={eventData}
					onUpdateEvent={onUpdateEvent}
					onRemoveEvent={onRemoveEvent}
					onAddEvent={onAddEvent}
				/>
			) : null}
		</Container>
	)
}
export default CalendarApp
