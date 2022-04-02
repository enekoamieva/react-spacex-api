const apiURL = 'https://api.spacexdata.com/v3';

export const getAllLaunches = async () => {
    try {
        const response = await fetch(`${apiURL}/launches`);
        const data = await response.json();
        return data.filter(item => item.flight_number !== 110)
    } catch (error) {
        console.error(error);
    }
}

export const getLaunchById = async (id) => {
    try {
        const response = await fetch(`${apiURL}/launches/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}