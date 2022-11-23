class Image{    
    constructor(imageId, taskId, name) {

        this.id = imageId;
        this.name = name;
        this.fileURI =  "/api/films/public/" + taskId + '/images/' + imageId + '/imageFile';
        this.self =  "/api/films/public/" + taskId + '/images/' + imageId;
    }
}

module.exports = Image;
