export const saveUser = async (user) => {
    console.log("User:", user);
    try {
        const response = await fetch("http://localhost:8080/saveUser", {
            method: "POST",
            body: user
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); 
        }

        const responseData = await response.json();
        console.log("Response:", responseData);
        return responseData;
    } catch (error) {
        console.error("Error saving user:", error.message);
        throw error; 
    }
};
