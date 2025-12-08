export const getLocation = () =>
  new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({ lat: 12.9351929, lng: 77.6244807 });
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        resolve({ lat: 12.9351929, lng: 77.6244807 }); 
      },
      { timeout: 5000 }
    );
  });
