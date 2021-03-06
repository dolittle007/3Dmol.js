

              $.get('volData/1fas.pqr', function(data){
                  viewer.addModel(data, "pqr");
                  $.get("volData/1fas.cube",function(volumedata){
                      viewer.addSurface($3Dmol.SurfaceType.VDW, {
                          opacity:0.85,
                          voldata: new $3Dmol.VolumeData(volumedata, "cube"),
                          volscheme: new $3Dmol.Gradient.RWB(2,0,1)
                      },{});
                      
                  viewer.render();
                  });
                  viewer.zoomTo();
              });