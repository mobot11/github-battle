var React = require('react');

var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
    render: function() {
        console.log(this);
        return (
            <div
                className="jumbotron col-sm-6 col-sm-offset-3 text-center"
                style={transparentBg}
            >
                <h1>{this.props.route.header}</h1>
                <div className="col-sm-12">
                    <form action="">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Github Username"
                            />
                        </div>
                        <div className="col-sm-4 col-sm-offset-4">
                            <button className="btn btn-block btn-success">
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    },
});

module.exports = PromptContainer;
