import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectionList, MatListOption } from '@angular/material/list';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatChipListbox, MatChip } from '@angular/material/chips';
import { MatSliderThumb } from '@angular/material/slider';

@Component({
	selector: 'app-filters',
	imports: [
		CommonModule,
		FormsModule,
		MatListModule,
		MatIconModule,
		MatChipsModule,
		MatRadioModule,
		MatButtonModule,
		MatSliderModule,
		MatExpansionModule,
		MatSlideToggleModule,
		MatSelectionList,
		MatListOption,
		MatAccordion,
		MatExpansionPanel,
		MatExpansionPanelHeader,
		MatExpansionPanelTitle,
		MatChipListbox,
		MatChip,
		MatSliderThumb
	],
	templateUrl: './filters.component.html',
	styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
	panelOpenState = signal(false);
}
