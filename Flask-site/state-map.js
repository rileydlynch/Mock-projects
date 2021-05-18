import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import plotly.express as px
import pandas as pd
import plotly.graph_objects as go
from urllib.request import urlopen
import json
with urlopen('https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_040_00_500k.json') as response:
    states = json.load(response) //This imports GeoJSON data that is used to draw polygons on top of a map, in this case polygons of US states.
	
external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']
app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

import pandas as pd //This step imports a csv with the data you want to display on the map
df = pd.read_csv("file:///C:/Users/riley/documents/python%20scripts/maps/popdata.csv",
                   dtype={"Geoid": str})

import plotly.express as px

fig = px.choropleth_mapbox(df, geojson=states, locations='Geoid', featureidkey="properties.GEO_ID",
                           color='CENSUS2019POP',
                           color_continuous_scale="Viridis",
						   hover_name="NAME",
                           range_color=(0, 39512223),
                           mapbox_style="carto-positron",
                           zoom=3, center = {"lat": 37.0902, "lon": -95.7129},
                           opacity=0.5,
                           labels={'unemp':'unemployment rate'}
                          )
fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})
fig.show() //Everything contained in the "fig" variable defines the map, including where it draws its data from.

app.layout = html.Div([ //The layout defines and actually calls all of the below mentioned HTML objects.
    dcc.Dropdown(#//This div is a dropdown containing choices of all 50 US states.
        id='state-choice',
        options=[
{'label': 'Alabama', 'value': 'Alabama'},
{'label': 'Alaska', 'value': 'Alaska'},
{'label': 'Arizona', 'value': 'Arizona'},
{'label': 'Arkansas', 'value': 'Arkansas'},
{'label': 'California', 'value': 'California'},
{'label': 'Colorado', 'value': 'Colorado'},
{'label': 'Connecticut', 'value': 'Connecticut'},
{'label': 'Delaware', 'value': 'Delaware'},
{'label': 'Florida', 'value': 'Florida'},
{'label': 'Georgia', 'value': 'Georgia'},
{'label': 'Hawaii', 'value': 'Hawaii'},
{'label': 'Idaho', 'value': 'Idaho'},
{'label': 'Illinois', 'value': 'Illinois'},
{'label': 'Indiana', 'value': 'Indiana'},
{'label': 'Iowa', 'value': 'Iowa'},
{'label': 'Kansas', 'value': 'Kansas'},
{'label': 'Kentucky', 'value': 'Kentucky'},
{'label': 'Louisiana', 'value': 'Louisiana'},
{'label': 'Maine', 'value': 'Maine'},
{'label': 'Maryland', 'value': 'Maryland'},
{'label': 'Massachusetts', 'value': 'Massachusetts'},
{'label': 'Michigan', 'value': 'Michigan'},
{'label': 'Minnesota', 'value': 'Minnesota'},
{'label': 'Mississippi', 'value': 'Mississippi'},
{'label': 'Missouri', 'value': 'Missouri'},
{'label': 'Montana', 'value': 'Montana'},
{'label': 'Nebraska', 'value': 'Nebraska'},
{'label': 'Nevada', 'value': 'Nevada'},
{'label': 'New Hampshire', 'value': 'New Hampshire'},
{'label': 'New Jersey', 'value': 'New Jersey'},
{'label': 'New Mexico', 'value': 'New Mexico'},
{'label': 'New York', 'value': 'New York'},
{'label': 'North Carolina', 'value': 'North Carolina'},
{'label': 'North Dakota', 'value': 'North Dakota'},
{'label': 'Ohio', 'value': 'Ohio'},
{'label': 'Oklahoma', 'value': 'Oklahoma'},
{'label': 'Oregon', 'value': 'Oregon'},
{'label': 'Pennsylvania', 'value': 'Pennsylvania'},
{'label': 'Rhode Island', 'value': 'Rhode Island'},
{'label': 'South Carolina', 'value': 'South Carolina'},
{'label': 'South Dakota', 'value': 'South Dakota'},
{'label': 'Tennessee', 'value': 'Tennessee'},
{'label': 'Texas', 'value': 'Texas'},
{'label': 'Utah', 'value': 'Utah'},
{'label': 'Vermont', 'value': 'Vermont'},
{'label': 'Virginia', 'value': 'Virginia'},
{'label': 'Washington', 'value': 'Washington'},
{'label': 'West Virginia', 'value': 'West Virginia'},
{'label': 'Wisconsin', 'value': 'Wisconsin'},
{'label': 'Wyoming', 'value': 'Wyoming'}
        ],
        placeholder='Click here for a dropdown or type to search for a state.'
    ),
    html.Div(id='state-choice-output'), #//This div's value is blank, but its value after being changed is defined below under "update_output"
    html.Div(["",
              dcc.Input(id='user-data-input', placeholder='Input your data here', type='text')]),
    html.Br(),
    html.Div(id='user-data-output'),
	dcc.Graph(figure=fig),
])


@app.callback(
    dash.dependencies.Output('state-choice-output', 'children'),
    [dash.dependencies.Input('state-choice', 'value')])
def update_output(value):
    return 'You have selected "{}". Please enter your data below:'.format(value) #//Here is where the value of the 'state-choice-output' Div is updated.


if __name__ == '__main__':
    app.run_server(debug=True)
