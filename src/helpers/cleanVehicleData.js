export const cleanVehicleData = (vehicleData) => {
  return vehicleData.results.reduce((vehicleArray, vehicle) => {
    const vehicleObj = {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      capacity: vehicle.passengers
    };
    return [...vehicleArray, vehicleObj];
  }, []);
};