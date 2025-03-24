import Site from "../Models/Site.js";



const getSites = async (req, res) => {
    try {
        const sites = await Site.find()
        return res.status(200).json({ success: true, sites })
    } catch (error) {
        return res.status(500).json({ success: false, error: "get site server error" })
    }
}

const addSite = async (req, res) => {
    try {
        const { site_name, address, description } = req.body;
        const newSite = new Site({
            site_name,
            address,
            description
        })
        await newSite.save()
        return res.status(200).json({ success: true, site: newSite })
    } catch (error) {
        return res.status(500).json({ success: false, error: "add site server error" })
    }

}

const getSite = async (req, res) => {
    try {
        const { id } = req.params;
        const site = await Site.findById({ _id: id });
        return res.status(200).json({ success: true, site });
    } catch (error) {
        return res.status(500).json({ success: false, error: "get site server error" })
    }
}

const updateSite = async (req, res) => {
    try {
        const {id} = req.params;
        const {site_name, address, description} = req.body;
        const updateSite = await Site.findByIdAndUpdate({_id: id}, {site_name, address, description}, { new: true });
        return res.status(200).json({ success: true, updateSite });

    } catch (error) {
        return res.status(500).json({
            success: false, error: "update site server error"
        })
    }
}

const deleteSite = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteSite = await Site.findById({_id: id});
        await deleteSite.deleteOne()
        return res.status(200).json({ success: true, deleteSite });

    } catch (error) {
        return res.status(500).json({
            success: false, error: "delete site server error"
        })
    }
}


export { getSites, addSite, getSite, updateSite, deleteSite }
