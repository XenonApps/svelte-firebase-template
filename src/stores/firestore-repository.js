import { firestore as db } from "../modules/firebase";
function createStore() {
  const store = writable({ status: 'loading', data: [] });
  const { subscribe, set, update } = store;

  const storeMap = {}
 
  const subscribeToCollectionStore = (collection, callback) => {
    
  } 

  // CRUD operations for firestore databases
  const addDoc = async (ref, doc) => {
    // add a new document to the database
  }

  const getDoc = async (ref, docId, depth) => {
    // retrieve a single doment
  }

  const getDocs = async (ref, filter) {
    // get all documents that match the criteria provide by the filter parameter
  } 

  const updateDoc = async (ref, docId, updatedObject) {
    // update the document for the given id
  }

  const deleteDoc = async (ref, docId) {
    // delete a document with the given id
  }

  return {
    subscribe,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc
  }
}

export const repository = createStore();