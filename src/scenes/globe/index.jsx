const Globe = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = {
      type: "Feature",
      properties: {
        name: "Coors Field",
        amenity: "Baseball Stadium",
        popupContent: "This is where the Rockies play!",
      },
      geometry: {
        type: "Point",
        coordinates: [-104.99404, 39.75621],
      },
    };

  return (
        <Viewer full>
          <GeoJsonDataSource
            data={data}
            markerColor={Color.RED}
            />
        </Viewer>
  );
}

export default Globe;