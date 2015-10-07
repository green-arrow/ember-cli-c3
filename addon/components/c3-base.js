import c3 from './c3-chart';
import ChartAxis from '../mixins/config-axis';
import ChartConfig from '../mixins/config-base';
import ChartColor from '../mixins/config-color';
import ChartGrid from '../mixins/config-grid';
import ChartLegend from '../mixins/config-legend';
import ChartPoint from '../mixins/config-point';
import ChartSize from '../mixins/config-size';
import ChartTooltip from '../mixins/config-tooltip';
import ChartPoint from '../mixins/config-point';
import ChartZoom from '../mixins/config-zoom';
import ChartData from '../mixins/data-json';

export default c3.extend(ChartData, ChartAxis, ChartColor, ChartLegend, ChartPoint, ChartSize, ChartTooltip, ChartPoint, ChartZoom, ChartGrid, ChartConfig, {
  chartAxisXType: 'category'
});
