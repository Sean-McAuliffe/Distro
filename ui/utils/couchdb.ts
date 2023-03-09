import axios from "axios";

/**
 * @description this class is a handler class for couchDB connections / transactions. 
 * 
 */
export class CouchDBHandler {

    public url: string;
    public readonly reportURL: string;
    public readonly datasourceURL: string;

    constructor(url: string) {
        this.url = url,
            this.reportURL = `${this.url}/reports`,
            this.datasourceURL = `${this.url}/datasources`
    }

    /**
     * @description checks to see if reports table exists, and if not, creates it
     * @returns object { status: status code || error message  }
     */
    initReports = async () => {
        try {
            let res = await axios.head(this.reportURL);
            if (res.status == 404) {
                let create = await axios.put(this.reportURL);
                return { "status": create.status }
            }
        } catch (error) {
            return { "status": error }
        }
    }



    /**
     * 
     * @description this function saves a new report for couchDB
     * @param doc report object
     * @returns object { status: 'OK' || error message }
     */
    saveReport = async (doc: object) => {
        try {
            //@ts-ignore
            let res = await axios.put(`${this.reportURL}/${doc.name}`, doc)
            if (res.status == 201 || res.status == 202) {
                return { "status": 'OK' }
            }
        } catch (error) {
            return { "status": error }
        }
    }


    /**
     * @description this function takes a report name (id) and returns the entire report object from couchDB
     * @param name string - report name
     * @returns object { status: "OK" || error message, doc: report object }
     */
    getReport = async (name: string) => {
        try {
            let res = await axios.get(`${this.reportURL}/${name}`)
            if (res.status == 201 || res.status == 202) {
                return { "status": 'OK', "doc": res.data }
            }
        } catch (error) {
            return { "status": error }
        }
    }









}