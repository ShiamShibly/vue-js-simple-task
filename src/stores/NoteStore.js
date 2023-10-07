import { defineStore } from 'pinia';

export const useNoteStore = defineStore( 'noteStore', {

	state: () => ({
		notes: [],
		lastNoteId : '',
		layout: "grid"
	
	}),
	getters: {
		allNotes: ( state ) => {
			return state.notes;
		},

		pinnedNotes: ( state ) => {
			return state.notes.filter( note => note.pinned );
		}
	},
	actions: {
		markedAsPinned( id ) {
			const updateNotes = this.notes.map( item => {
				if ( id === item.id ) {
					item.pinned = true;
					return item;
				}

				return item;
			} );

			this.notes = updateNotes;
		},

		markedAsUnPinned( id ) {
			const updateNotes = this.notes.map( item => {
				if ( id === item.id ) {
					item.pinned = false;
					return item;
				}

				return item;
			} );

			this.notes = updateNotes;
		},
		addNote (note){
			const newNoteArr =[note, ... this.notes];
			this.notes = newNoteArr;
		}
	}

} );