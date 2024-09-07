// src/firebase/database.js
import { database } from './config';
import { ref, set, push, onValue } from "firebase/database";

// Giden kargo verisi yazma
export function writeShipmentData(shipmentId, shipmentData) {
  set(ref(database, 'shipments/' + shipmentId), shipmentData);
}

// Yeni kargo ekleme
export function addNewShipment(shipmentData) {
  const newShipmentRef = push(ref(database, 'shipments'));
  set(newShipmentRef, shipmentData);
}

// Giden kargo verisi okuma
export function getShipmentData(shipmentId, callback) {
  const shipmentRef = ref(database, 'shipments/' + shipmentId);
  onValue(shipmentRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}

// Tüm kargoları okuma
export function getAllShipments(callback) {
  const shipmentsRef = ref(database, 'shipments');
  onValue(shipmentsRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}

// Benzer şekilde, kullanıcılar, fiyat teklifleri ve mailler için fonksiyonlar oluşturabilirsiniz
