import { MapFormat } from '../lava/bingmap';
import { Setting } from '../pbi/numberFormat';

export class Format {
    legend = {
        show: true,
        position: 'top' as 'top' | 'bot',
        fontSize: 12,
        color: true,
        width: true,
        color_default: false,
        width_default: false,
        color_label: '',
        color_legend_name: '',
        width_label: '',
        width_legend_name: ''
    };

    style = {
        style: null as 'straight' | 'flow' | 'arc',//depends
        direction: 'out' as 'in' | 'out',
        limit: 5
    };

    width = {
        customize: true,
        item: 2,
        scale: 'linear' as 'linear' | 'log' | 'none',
        min: 2,
        max: 10,
        unit: null as number//depends
    };

    color = {
        item: { solid: { color: '#01B8AA' } },
        min: { solid: { color: '#d43d51' } },
        min_value: 0,
        mid: { solid: { color: '#fff59f' } },
        mid_value: 0.5,
        max: { solid: { color: '#488f31' } },
        max_value: 1,
        autofill: false,
        customize: true
    };

    advance = {
        cache: true,
        relocate: false,
        located: true,
        unlocated: true
    };

    mapControl = MapFormat.control(new MapFormat(), { autoFit: true });

    mapElement = MapFormat.element(new MapFormat(), {});

    valueFormat = new ValueFormat();

    bubble = {
        for: null as 'none' | 'origin' | 'dest' | 'both',//depends
        slice: null as boolean,//depends
        bubbleColor: { solid: { color: '#888888' } },
        scale: 25,
        label: 'none' as 'none' | 'all' | 'manual' | 'hide',
        labelOpacity: 50,
        labelColor: { solid: { color: '#888888' } }
    };
}

class ValueFormat extends Setting {
    sort = 'des' as 'asc' | 'des';
    top = 10;
}