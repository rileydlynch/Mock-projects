import dash
import dash_html_components as html
import dash_core_components as dcc

external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)
app.layout = html.Div([ //This div is a dropdown containing choices of all 50 US states.
    dcc.Dropdown(
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
        value=''
    ),
    html.Div(id='state-choice-output'), //This div is blank, but its value after being changed is defined below under "update_output"
])


@app.callback(
    dash.dependencies.Output('state-choice-output', 'children'),
    [dash.dependencies.Input('state-choice', 'value')])
def update_output(value):
    return 'You have selected "{}"'.format(value) //Here is where the value of the 'state-choice-output' Div is updated.


if __name__ == '__main__':
    app.run_server(debug=True)
