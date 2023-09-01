import axios from "axios";
export const fetchData = async (page, setData, setLoader) => {
    try {
        const response = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=${page}&context=embed`);
        setData(response.data);
        setLoader(false);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
}