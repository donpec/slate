const endpoints = {
    'login': `https://lap55.com/json/api/cmd/logusr/${username}/${password}`, // se le envía en el body 
    'spotlight': `https://lap55.com/json/api/sl/leon/home_spotlight`,
    'buttons-menu': `https://lap55.com/json/api/cs/leon_home_bm`,
    'livetv': `https://lap55.com/json/api/cmdata/leon/livetvplus/${token}/${utcLocal}`,
    'link-livetv': `https://lap55.com/json/api/cmd/getLinkLiveTV/${SignalID}/${token}`,
    'catalogue-vod': `https://lap55.com/json/api/cmdata/leon/entplus/${token}`,
    'catalogue-zonakids': `https://lap55.com/json/api/cdata/leon/kids/${token}`,
    'link-vod': `https://lap55.com/json/api/cmd/getLinkLeon/${Registro}/${token}`,
    'resume-video': `https://lap55.com/json/api/cmd/sCmResPos/${Registro}/${positionVideo}/${token}`,
    'season': `https://lap55.com/json/api/season/leon/${ContentTypeOrder}`,
    'chapters': `https://lap55.com/json/api/episode/leon/${serieId}/temp/${TitleSeason}/${token}`,
    'radio': `https://lap55.com/json/api/cdata/leon/radio/${token}`,
    'link-radio': `https://lap55.com/json/api/cmd/getLinkLeon/${Registro}/${token}`,
    'music-home': `https://api.guiah.tv/music/home/${token}/${profileID}`,
    'music-artist': `https://api.guiah.tv/get/artist/${artistID}`,
    'music-album': `https://api.guiah.tv/get/album/${albumID}`,
    'music-myplaylists': `https://api.guiah.tv/get/myplaylist/${memclid}/${profileID}`,
    'music-playlist': `https://api.guiah.tv/get/playlist/${playlistID}`,
    'music-track-link': `https://api.guiah.tv/get/trackLink/${trackId}/${token}`,
    'music-create-playlist': `https://api.guiah.tv/post/playlist/${token}/${profileID}`,
    'music-edit-playlisy': `https://api.guiah.tv/put/playlist/${playlistID}/${token}/${profileID}`,
    'music-delete-playlist': `https://api.guiah.tv/delete/playlist/${playlistID}/${token}/${profileID}`,
    'search': `https://lap55.com/json/api/cmetadata/search/leon/${memclid}/${string}/${utcLocal}`,
    'contact-info': `https://lap55.com/json/api/getinfo/contactid/${ContactID}`
}

// al endpoint del login se le envía un objeto en el body con los datos del dispositivo
//  {
//      DevicePlatform: credentials.platform,
//      DeviceType: credentials.deviceType,
//      DeviceUUID: credentials.uuid,
//      DeviceVersion: credentials.deviceVersion
//  }