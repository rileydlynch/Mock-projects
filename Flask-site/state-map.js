import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State
import plotly.express as px
import pandas as pd
import plotly.graph_objects as go
from urllib.request import urlopen
import json
with urlopen('https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_040_00_500k.json') as response:
    states = json.load(response) #//This imports GeoJSON data that is used to draw polygons on top of a map, in this case polygons of US states.
	
external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']
app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

import pandas as pd #//This step imports a csv with the data you want to display on the map
df = pd.read_csv("https://raw.githubusercontent.com/rileydlynch/Mock-projects/main/Flask-site/nodata.csv",
                   dtype={"Geoid": str})
locatvar = 'Geoid'
colorvar = 'CENSUS2019POP'

import plotly.express as px

fig = px.choropleth_mapbox(df, geojson=states, locations=locatvar, featureidkey="properties.GEO_ID",
                           color=colorvar,
                           color_continuous_scale="bluered",
						   hover_name="NAME",
                           range_color=(0, 39512223),
                           mapbox_style="carto-positron",
                           zoom=3, center = {"lat": 37.0902, "lon": -95.7129},
                           opacity=0.5,
                           labels={'unemp':'unemployment rate'}
                          )
fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})
fig.show() #//Everything contained in the "fig" variable defines the map, including where it draws its data from.

app.layout = html.Div([ #//The layout defines and actually calls all of the below mentioned HTML objects.
    html.H1("How To Use This Page"),
	html.P("You have two options: Either upload your own CSV file containing the data you would like to use, or manually upload the data using the provided State dropdown and entering your data in the data input field."),
	html.Br(),
	html.H2("Option #1: Upload"),#//This begins the upload section
	dcc.Upload(
        id='csv-upload',
        children=html.Div([
            'Drag and Drop or ',
            html.A('Select Files')
        ]),
        style={
            'width': '50%',
            'height': '60px',
            'lineHeight': '60px',
            'borderWidth': '1px',
            'borderStyle': 'dashed',
            'borderRadius': '5px',
            'textAlign': 'center',
            'margin': '10px'
        },
        # Allow multiple files to be uploaded
        multiple=False
    ),#//End of upload section
	html.Br(),
	html.H2("Option #2: Manually input data:"),
    html.Div(id='output-data-upload'),
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
    html.Br(),
	html.Div(["",
              dcc.Input(id='user-data-input', placeholder='Input your data here', type='text')]),
	html.Button('Submit', id='submit-val'),
    html.Div(id='user-data-output'),
	html.Br(),
	html.Div(id='graph-output'),
])#//End of layout

def parse_contents(contents, filename, date):
    content_type, content_string = contents.split(',')

    decoded = base64.b64decode(content_string)
    try:
        if 'csv' in filename:
            # Assume that the user uploaded a CSV file
            df = pd.read_csv(
                io.StringIO(decoded.decode('utf-8')))
        elif 'xls' in filename:
            # Assume that the user uploaded an excel file
            df = pd.read_excel(io.BytesIO(decoded))
    except Exception as e:
        print(e)
    return html.Div([dcc.Graph(figure = fig)])

@app.callback(
    dash.dependencies.Output('state-choice-output', 'children'),
    [dash.dependencies.Input('state-choice', 'value')])
def update_output(value):
    return 'You have selected "{}". Please enter your data below:'.format(value) #//Here is where the value of the 'state-choice-output' Div is updated.
		
@app.callback(Output('graph-output', 'children'),
              Input('csv-upload', 'contents'),
              State('csv-upload', 'filename'),
              State('csv-upload', 'last_modified'))
def update_output(list_of_contents, list_of_names, list_of_dates):
    if list_of_contents is not None:
        children = [
            parse_contents(c, n, d) for c, n, d in
            zip(list_of_contents, list_of_names, list_of_dates)]
        return children

if __name__ == '__main__':
    app.run_server(debug=True)
